/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LoginInput = {
    email: string;
    password: string;
};
export type LoginQueryVariables = {
    input: LoginInput;
};
export type LoginQueryResponse = {
    readonly login: {
        readonly accessToken: string;
    };
};
export type LoginQuery = {
    readonly response: LoginQueryResponse;
    readonly variables: LoginQueryVariables;
};



/*
mutation LoginQuery(
  $input: LoginInput!
) {
  login(input: $input) {
    accessToken
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AuthCredentialsDto",
    "kind": "LinkedField",
    "name": "login",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "accessToken",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginQuery",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "29beb84674a3b110fb58beecfe989443",
    "id": null,
    "metadata": {},
    "name": "LoginQuery",
    "operationKind": "mutation",
    "text": "mutation LoginQuery(\n  $input: LoginInput!\n) {\n  login(input: $input) {\n    accessToken\n  }\n}\n"
  }
};
})();
(node as any).hash = '479a69b32ae1d9b942bae8391a665dc1';
export default node;
