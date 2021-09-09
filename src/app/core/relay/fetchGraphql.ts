import { GraphQLResponse } from "relay-runtime";

async function fetchGraphQL(request, variables): Promise<GraphQLResponse> {
  console.log(
    `fetching query ${request.name} with ${JSON.stringify(variables)}`
  );

  const authorization = 'Bearer '+localStorage.getItem("token") || "";

  const fetchConfig = {
    method: "POST",
    headers: {
      authorization,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  };
  console.log("process.env.REACT_APP_BASE_URL", process.env);
  return fetch(`${process.env.REACT_APP_BASE_URL}`, fetchConfig).then(
    (response) => response.json()
  );
}

export default fetchGraphQL;
