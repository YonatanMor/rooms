import type {
  ActionFunctionArgs,
  TypedResponse,
} from "@remix-run/server-runtime"

type Input = Request | URL | URLSearchParams | FormData

type TNameActionResponse = Promise<Response>

type ActionsRecord = Record<
  string,
  (actionArgs: ActionFunctionArgs) => TNameActionResponse
>

type ResponsesRecord<Actions extends ActionsRecord> = {
  [Action in keyof Actions]: Actions[Action] extends (
    request: Request,
  ) => Promise<TypedResponse<infer Result>>
    ? Result
    : never
}

type ResponsesUnion<Actions extends ActionsRecord> =
  ResponsesRecord<Actions>[keyof Actions]

/**
 * Runs an action based on the request's action name
 * @param request The request to parse for an action name
 * @param actions The map of actions to run
 * @returns The response from the action
 * @throws {ReferenceError} Action name not found
 * @throws {ReferenceError} Action "${name}" not found
 */
export async function namedAction<Actions extends ActionsRecord>(
  actionArgs: ActionFunctionArgs,
  actions: Actions,
): TNameActionResponse {
  console.log({ actionArgs }, { actions })
  const { request } = actionArgs
  const name = await getActionName(request)

  if (name && name in actions) {
    return actions[name](actionArgs) as unknown as TypedResponse<
      ResponsesUnion<Actions>
    >
  }

  if (name === null && "default" in actions) {
    return actions["default"](actionArgs) as unknown as TypedResponse<
      ResponsesUnion<Actions>
    >
  }

  if (name === null) throw new ReferenceError("Action name not found")

  throw new ReferenceError(`Action "${name}" not found`)
}

async function getActionName(input: Input): Promise<string | null> {
  if (input instanceof Request) {
    const actionName = findNameInURL(new URL(input.url).searchParams)

    if (actionName) return actionName

    const contentType = input.headers.get("content-type")
    if (contentType?.includes("application/json")) {
      const json = await input.clone().json()
      return findNameInJSON(json)
    } else {
      return findNameInFormData(await input.clone().formData())
    }
  }

  if (input instanceof URL) {
    return findNameInURL(input.searchParams)
  }

  if (input instanceof URLSearchParams) {
    return findNameInURL(input)
  }

  if (input instanceof FormData) {
    return findNameInFormData(input)
  }

  return null
}

function findNameInURL(searchParams: URLSearchParams) {
  for (const key of searchParams.keys()) {
    if (key.startsWith("/")) return key.slice(1)
  }

  let actionName = searchParams.get("intent")
  if (typeof actionName === "string") return actionName

  actionName = searchParams.get("action")
  if (typeof actionName === "string") return actionName

  actionName = searchParams.get("_action")
  if (typeof actionName === "string") return actionName

  return null
}

function findNameInFormData(formData: FormData) {
  for (const key of formData.keys()) {
    if (key.startsWith("/")) return key.slice(1)
  }

  let actionName = formData.get("intent")
  if (typeof actionName === "string") return actionName

  actionName = formData.get("action")
  if (typeof actionName === "string") return actionName

  actionName = formData.get("_action")
  if (typeof actionName === "string") return actionName

  return null
}

function findNameInJSON(json: Record<string, unknown>) {
  return json.action as string | null
}
