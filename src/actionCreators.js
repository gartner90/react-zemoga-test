const toggleAlert = showAlert => {
	return {
      type: "SHOW_ALERT",
      showAlert: showAlert
    };
}

const editData = (array) => {
  return {
      type: "EDIT_DATA",
      array
    };
}

export { toggleAlert, editData};