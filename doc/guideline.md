# Documentation Guideline


## API Document Workflow
**Steps**
1. Create a Pull Request with changes in the documentation
2. Approve the Pull Request by at least 2 person
3. Merge the Pull Request
4. Generate the `final.yml` file
5. Copy the `final.yml` file to the CoreAPI server for Deployment


***

## API Naming
The API naming should be of following format:
_\<Action\>_ (a/an) _\<Resource Name\>(s)_

Examples:
* Create a Schedule
* Update an Open Shift
* List Projects


***

## Tags
The tags represent the resources. This groups the API related to an resource in a single tab.
The tag name should be plural version of a resource name unless the resource in question is a singleton within the system (for example, the overall status of the system might be /status).


***

## API Order
The API endpoints for any resource should be in following order:
* Create
* List
* Get
* Update
* Any other actions
* Delete
