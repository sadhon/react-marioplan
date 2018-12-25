
const initState = {
  projects : [
    {id: 1, title: "project title 1", content: "project 1 content"},
    {id: 2, title: "project title 2", content: "project 2 content"},
    {id: 3, title: "project title 3", content: "project 3 content"},
  ]
}

const projectReducer = (state = initState, action) => {

  switch(action.type){
    case "CREATE_PROJECT" :
      console.log("project created", action)
      return state;

    case "CREATE_PROJECT_ERROR" :
      console.log("project not created ", action)
      return state;

    default:
      return state;
  }


}

export default projectReducer;
