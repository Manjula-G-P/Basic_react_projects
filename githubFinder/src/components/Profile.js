import React,{useState,useEffect} from "react";
import axios from "axios"
import Myprofile from "./MyProfile"
import Repos from "./Repos"
import "./Profile.css"

function Profile(props) {
  // console.log("props", props);

  const [repos, setRepos] = useState([])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${props.location.userData.login}/repos`)
    .then(res => {
        setRepos(res.data)
        // console.log("repos*********", res.data)
    })
    .catch(err => {
        console.log(err)
    })
},[])
console.log("repos*************",repos)

  return (
    <div className="container">
      <div>
        <Myprofile Data={props.location.userData}/>
      </div>
      <div className="repos">
        <>
          <h1>Repositries</h1>
                {
                    repos.map((detail, index) => (
                    <div key={index}>
                        <Repos name={detail.name}
                            full_name={detail.full_name}
                            description={detail.description}
                            language={detail.language}
                            forks_count={detail.forks_count}
                            watchers_count={detail.watchers_count}
                            stars_count={detail.stargazers_count}
                            url={detail.html_url}
                        />
                    </div>))
                }
            </>
      </div>
    </div>
  );
}

export default Profile