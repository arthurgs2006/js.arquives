import Image from "../Image-Component/image.jsx"
import Info from "./index.jsx";
import img from "../../assets/profileImage.png"
import Btn from "../Button/button.jsx"
import "../../style/Profile/profile.scss"

const [followText, setFollowText] = useState("Follow")
const follow = (ev)=>{
  console.log(ev)
  alert("Agora você está seguindo seu GitHub");
  setFollowText("Following")
}

const Profile = () => {
  return (
    <section>
      <Image src_img={img} alt_img="Profile Photo " title="John Doe" />
      <hr />
      <Info text="Full-stack Javascript developer at Acme Inc."/>
      <hr />
      <Info text="+55 (16) 99242-8919"></Info>
      <hr />
      <Info 
      // className={styles.links}
      id="links-section"
      data-test="some value"
      aria-label="social links"
      text="arthurgonsal@hotmail.com"></Info>
      <hr />
      <div className="btn-area">
        <Btn onclick={followText}>{state}</Btn>
        <Btn>GitHub</Btn>
        <Btn>LinkedIn</Btn>
        <Btn>Twitter</Btn>
      </div>
    </section>
  )
}

export default Profile