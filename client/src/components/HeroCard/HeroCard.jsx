import React, {useState} from 'react';
import style from './HeroCard.module.css';
import MyButton from "../MyButton/MyButton";
import {Card, Image} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {deleteHero} from "../../http/heroesAPI";
import EditModal from "../MyModal/EditModal/EditModal";

const HeroCard = ({heroes, setHeroes, hero}) => {
    const [modalEditVisible, setModalEditVisible] = useState(false);
    const serv = 'http://localhost:5000/'
    const history = useHistory()

    const deleteHeroWrapper = (heroId) => {
        setHeroes(heroes.filter(item => item.id !== heroId))
        deleteHero(heroId)
    }

    return (
        <Card className={style.wrapper}>
            <Image className={style.img} src={serv + hero.images}/>
            <h3>{hero.nickname}</h3>
            <MyButton
                style={{margin: 5}}
                onClick={() => setModalEditVisible(true)}>
                Edit
            </MyButton>
            <MyButton
                style={{margin: 5}}
                onClick={() => history.push('/hero/' + hero.id )}>
                Read more
            </MyButton>
            <MyButton
                style={{margin: 5}}
                onClick={() => deleteHeroWrapper(hero.id)}>
                Delete hero
            </MyButton>
            <EditModal
                heroes={heroes}
                setHeroes={setHeroes}
                hero={hero}
                show={modalEditVisible}
                onHide={() => setModalEditVisible(false)}
            />
        </Card>
    );
};

export default HeroCard;