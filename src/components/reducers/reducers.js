const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.concat([action.data]);
    case "DELETE":
      return state.filter((post) => post.id !== action.id);
    case "EDIT":
      return state.map((post) =>
        post.id === action.id ? { ...post, change: !post.change } : post
      );
    case "UPDATE":
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...state,
            id: action.data.id,
            name: action.data.newname,
            email: action.data.newemail,
            phone: action.data.newphone,
            date: action.data.newdate,
            city: action.data.newcity,
            district: action.data.newdistrict,
            province: action.data.newprovince,
            country: action.data.newcountry,
          };
        } else {
          return post;
        }
      });
    case "SORT":
      return [...state].sort((a, b) => (a.name > b.name ? -1 : 1));
    default:
      return state;
  }
};

export default reducer;
