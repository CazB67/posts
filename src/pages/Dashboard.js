import React, { useState , useEffect} from "react";
import { PostsNav, NavLinks } from "../components/Navbar";
import Footer from "../components/Footer";
import SettingsModal from "../components/Modal";
import TitleList from "../components/TitleList";
import { connect } from "react-redux";
import { validateName, chooseColor } from "../Redux/actions/index";
import store from "../Redux/store";
import { useHistory } from "react-router-dom";

function mapDispatchToProps(dispatch) {
    return {
      validateName: name => dispatch(validateName(name)),
      chooseColor: color => dispatch(chooseColor(color))
    };
  }

function MainPage(props) {
  const history = useHistory()
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [themeColorHolding, setThemeColorHolding] = useState("")
  const [themeColorStore, setThemeColorStore] = useState("")
  const [nameStore, setNameStore] = useState()
  const [loading, setLoading] =useState(true);

  useEffect(() => {
    console.log(store.getState());
    if(store.getState().name === "") {
      return history.push('/')
    }
    store.dispatch( chooseColor({ color: "grey" }))

    store.subscribe(() => {
      setThemeColorStore(store.getState().color.color)
      setNameStore(store.getState().name.name)
      setLoading(store.getState().isFetchingPosts)
    })

  },[]);

  function onChangeColor(event) {
    event.preventDefault()
    console.log(event.target.value);
    setThemeColorHolding(event.target.value)
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    props.validateName( {name})
    setShow(false)
    setThemeColorStore(themeColorHolding)
    store.dispatch( chooseColor({ color: themeColorHolding }) );
  }

  const handleChange = async (event) => {
    event.preventDefault()
    const  {value}  = event.target;
    setName(value) 
  }
  const handleClose = () => setShow(false);

  function handleModal(event) {
    event.preventDefault();
    setShow(true);
  }

    return (
      <>
      <SettingsModal
      show={show}
      handleClose={handleClose}
      onClick={handleClose}
      onSubmit={onSubmit}
      handleChange={handleChange}
      onChange={onChangeColor}
      />
      <PostsNav
        color={themeColorStore}>
        <NavLinks
          onClick={handleModal}/>
      </PostsNav>
      {loading ? <img id='loader' src='data:image/
png;base64,R0lGODlhgAAPAJEAAAAAALOzs////wAAACH/
C05FVFNDQVBFMi4wAwEAAAAh+QQECgAAACwAAAAAgAAPAAACo4wfooK33NKKUtF3Z8RbN/
55CEiNonMaJGp1bfiaMQvBtXzTpZuradUDZmY+opA3DK6KwaQTCbU9pVHc1LrDUrfarq76
5Ya9u+VRzLyO12lwG10yy39zY11Jz9t/6jf5/
HfXB8hGWKaHt6eYyDgo6BaH6CgJ+QhnmWWoiVnI6ddJmbkZGkgKujhplNpYafr5OooqGst
66Uq7OpjbKmvbW/
p7UAAAIfkEBAoAAAAsAAAAAAcADwAAAgiEj6nL7Q+jLAAh+QQECgAAACwLAAAABwAPAAAC
CISPqcvtD6MsACH5BAQKAAAALBYAAAAHAA8AAAIIhI+py+0PoywAIfkEBAoAAAAsIQAAAA

cADwAAAgiEj6nL7Q+jLAAh+QQECgAAACwsAAAABwAPAAACCISPqcvtD6MsACH5BAQKAAAA
LDcAAAAHAA8AAAIIhI+py+0PoywAIfkEBAoAAAAsQgAAAAcADwAAAgiEj6nL7Q+jLAAh+Q
QECgAAACxNAAAABwAPAAACCISPqcvtD6MsACH5BAQKAAAALFgAAAAHAA8AAAIIhI+py+0P
oywAIfkEBAoAAAAsYwAAAAcADwAAAgiEj6nL7Q+jLAAh+QQECgAAACxuAAAABwAPAAACCI
SPqcvtD6MsACH5BAQKAAAALG4AAAASAA8AAAIojB+iAu2AzmKvRTOrvVnftGgQF3qkIn5d
pZbsSb3R+rSoObs1nPJaAQA7' alt='Loading...' />: <p>loaded</p> }
      <TitleList/>
      <Footer
        color={themeColorStore}
        name={nameStore}/>
      </>
    );
  }

  const Dashboard = connect(
    null,
    mapDispatchToProps
  )(MainPage);
  
  export default Dashboard;