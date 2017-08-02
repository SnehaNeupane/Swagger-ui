#Development

Here we will create an api and also walk through details.

1. First create a api file under api_doc/api

    `sample.yml`

    ```
      > api_doc
        > api
            sample.yml
        > definitions
    ```

    In `sample.yml` file, we write down the api.

    ```yml
    path:
      method:
        summary: Create Sample
        tags:
          - Sample
        description:
        parameters:
          - name: body
            in: body
            schema:
              $ref: '#/definitions/SampleRequest'
        responses:
          status_code:
            description:
            schema:
              $ref: '#/definitions/SampleResponse'
    ```


2. Then create a definition file under api_doc/definitions

    `sample_def.yml`

    ```
      > api_doc
        > api
        > definitions
          sample_def.yml
    ```

    In `sample_def.yml` file, we write down the all the element of the api request and response.

    ```yaml
    NameElement:
      type: string
      description: Name of user
      example: Raj
    PhoneNumberElement:
      type: integer
      description: Phone number
      example: 43123123
    SampleRequest:
      type: object
      properties:
        name:
          $ref: '#/definitions/NameElement'
        phone_number:
          $ref: '#/definitions/PhoneNumberElement'
    SampleResponse:
      type: object
        id:
          type: string
          description: Id of sample
          example: 'zxx123adrt'
        name:
          $ref: '#/definitions/NameElement'
        phone_number:
          $ref: '#/definitions/PhoneNumberElement'

    ```


  Lets go through detail overview.

  * path:

    It describes the api path.

    ```
    /samples:
    ```

  * method:

    It describes which http method we are using. There are multiple http methods:
      - get
      - post
      - put
      - patch
      - delete
      - options


    ```
    post:
    ```

    [Here](http://www.restapitutorial.com/lessons/httpmethods.html) you can get more details about http methods.

  * summary:

    It is title of an api.

    ```
    summary: Create a Sample
    ```

  * description:

    It is description of an api. In description we can add html tags.

    Single line description.
    ```
    description: This is a description.
    ```

    Multiple line description use `>-` or `|` symbol.

    ```
    descriptions: >-
      <h1>Create a sample</h1> <br>
      <b> Hello world </b>

    ```

    ```
    description: |
      <h1>Create a sample</h1> <br>
      <b> Validations</b> <br>
      <table>
        <tr>
          <th>Error</th>
          <th>Message</th>
          <th>Code</th>
        <tr>
          <td>invalid name</td>
          <td>Standard messages</td>
          <td>422</td>
        </tr>
      </table>
    ```

  * tags:

    To represent the resource. We can add multiple tags.

    ```
    tags: [Sample, Example]

    OR

    tags:
      - Sample
      - Example

    ```

  * parameters:

    Here we list out the request parameters for http request.
    - header
    - body
    - custom

    ```
    parameters:
      - name: body
        in: body
        schema:
          $ref: '#/definitions/SampleRequest'
    ```

  * in:

    The location of the parameter

    - path
    - body
    - header
    - query
    - formData

    ```
    in: body
    ```
  * schema:

    The schema defining the type used for the body parameter.

    ```
    Schema:

    ```

    Or we can reference.

    ```
    schema:
      $ref: '#/definitions/SampleElement'
    ```

  * responses:

    The Responses Object MUST contain at least one response code, and it should be the response for a successful operation call.

  * status_code:

    The HTTP Status Codes are used to indicate the status of the executed operation.

    ```
    200:
    201:
    ```

  * $ref:

    Allows for an external definition of this path item.

    ```
    $ref: '#/definitions/SampleElement'
    ```

  * type:

    It is data types in the swagger specifications supported by JSON schema.

    | Common Name | type | format |	Comments |
    | ----------- | ---- | ------ | -------- |
    | integer |	integer | int32 | signed 32 bits |
    | long | integer | int64 | signed 64 bits |
    | float | number | float |
    | double |	number | double |
    | string |	string |
    | byte | string | byte | base64 encoded characters |
    | binary | string | binary | any sequence of octets |
    | boolean |	boolean	 |
    | date | string | date | As defined by full-date - RFC3339 |
    | dateTime | string | date-time | As defined by date-time - RFC3339 |
    | password | string | password | Used to hint UIs the input needs to be obscured. |

**_Note_:** For more details go to swagger [specification](http://swagger.io/specification)
