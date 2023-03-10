import { useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import styled from "styled-components";
import styles from './Detail.module.css'

const Loading = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`
const LoadingText = styled.h5`
font-size: 5em;
font-family: get_schwifty
`
export default function Detail(props)
{
    const {id} = useParams();

    const [infoDetail, setInfo] = useState({});


    useEffect(() => {
      const KEY = '86334f583361.82f001e1c09131539161'
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
        .then((response) => response.json())
        .then((char) => {
          if (char.name) {
            setInfo(char);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .catch((err) => {
          window.alert("No hay personajes con ese ID");
        });
      return () => setInfo({});
    }, [id]);
    
      return(
        /*<TotalDiv>*/<div className={styles.TotalDiv}>
          {
            infoDetail.id ? /*FrontAndBack*/<div className={styles.FrontAndBack}>
              <div className={styles.Back}>
              <h5>Name: {infoDetail.name}</h5>
              <h5>Status: {infoDetail.status}</h5>
              <h5>Specie: {infoDetail.species}</h5>
              <h5>Gender: {infoDetail.gender}</h5>
              <h5>Origin: {infoDetail.origin?.name}</h5>
              </div>
              <div className={styles.Front}>
                <img className={styles.ImageChar} src={infoDetail.image} alt={infoDetail.name} /*ImageChar*//>/
                <div className={styles.FrontText}>{infoDetail.name/*FrontText*/}</div> 
              </div>
              

            </div>/*FrontAndBack*/  : <Loading><LoadingText>Loading...</LoadingText></Loading>
          }
        </div> //TotalDiv
      )
}