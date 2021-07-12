//import js files
import {handleURL} from './js/handleURL.js'
import {checkUrl} from './js/checkUrl'

//import styles files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'




alert("I EXIST")
console.log("CHANGE!!");

//export our js to Client library we created in webpack output this process done in deeps by webpack
//we can use this in html file but we put Client. before the func
export {
    handleURL,
    checkUrl
}


