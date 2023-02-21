import web3 from './web3_'
import VerifyMeAbi from '../abi/VerifyMe.json'




const instance = new web3.eth.Contract(VerifyMeAbi.abi,process.env.REACT_APP_CONTRACTADDRESS)  
// console.log(instance)

export default instance

