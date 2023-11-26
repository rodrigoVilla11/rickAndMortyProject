import { useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import styled from "styled-components";
import styles from './Detail.module.css'

export default function Detail(props)
{
    const {id} = useParams();

    const [infoDetail, setInfo] = useState({});


    useEffect(() => {
    fetch(`/detail/${id}`)
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
        <div className={styles.TotalDiv}>
          {
            infoDetail.id ? <div className={styles.FrontAndBack}>
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
              

            </div>  : <Loading><LoadingText>Loading...</LoadingText></Loading>
          }
        </div>
      )
}

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