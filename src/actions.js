export const increment = ({dispatch, state}) => {
    dispatch('INCREMENT', 1);
}

export const navigateTo = ({dispatch, state}, path) => {
    dispatch('NAVIGATE_TO', path);
}

export const setCurrentPerson = ({dispatch, state}, data) => {
    dispatch('SET_CURRENT_PERSON', data);
}