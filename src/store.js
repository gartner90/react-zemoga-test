import { createStore } from 'redux';

let famous;

if (localStorage.getItem('reactTestData')) {
	famous = JSON.parse(localStorage.getItem('reactTestData'));
} else {
	famous = [
        { id: 0, name: "Kanye West", up: 8, down: 3, category: "Entertainment", vote: true, voted: false, closingDate: "Thu Oct 19 2017 14:26:02 GMT-0500 (COT)", image: "https://cdn-images-1.medium.com/max/1116/1*O__HhvrQCPEIYIpawjpTXg.jpeg", description: "Simply dummy text of the printing and typesetting industry. Tthe industry's standard dummy." },
        { id: 1, name: "Mark Zuckerberg", up: 5, down: 2, category: "Business", vote: true, voted: false, closingDate: "Thu Sep 19 2017 14:26:02 GMT-0500 (COT)", image: "https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg", description: "Simply dummy text of the printing and typesetting industry. Tthe industry's standard dummy." },
        { id: 2, name: "Cristina Fernandez de Kirchner", up: 2, down: 9, category: "Politics", vote: true, voted: false, closingDate: "Thu Aug 19 2017 14:26:02 GMT-0500 (COT)", image: "https://www.sitiosargentina.com.ar/wp-content/uploads/1970/01/Cristina-Fern%C3%A1ndez-de-Kirchner.jpg", description: "Simply dummy text of the printing and typesetting industry. Tthe industry's standard dummy." },
        { id: 3, name: "Malala Yousafzai", up: 1, down: 1, category: "Entertainment", vote: true, voted: false, closingDate: "Thu Jul 19 2017 14:26:02 GMT-0500 (COT)", image: "http://sachtimes.com/en/wp-content/uploads/2017/08/images_malala-y.jpg", description: "Simply dummy text of the printing and typesetting industry. Tthe industry's standard dummy." }
    ];
}

const reducer = (state, action) => {
	if (action.type === "SHOW_ALERT") {
		return {
			...state,
			showAlert: !action.showAlert
		};
	} else if (action.type === "EDIT_DATA") {
		localStorage.setItem('reactTestData', JSON.stringify(action.array));
		return {
			...state,
			famous: action.array
		};
	}

	return state;
}

export default createStore(reducer, { cart: [], showAlert: true, famous: famous});