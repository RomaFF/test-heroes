import React, {useState} from 'react';
import {editHero} from "../../../http/heroesAPI";
import {Form, Modal} from "react-bootstrap";
import MyButton from "../../MyButton/MyButton";

const EditModal = ({heroes, setHeroes, hero, show, onHide}) => {
    const [nickname, setNickname] = useState(hero.nickname)
    const [realName, setRealName] = useState(hero.real_name)
    const [file, setFile] = useState(hero.images)
    const [originDescription, setOriginDescription] = useState(hero.origin_description)
    const [superpowers, setSuperpowers] = useState(hero.superpowers)
    const [catchPhrase, setCatchPhrase] = useState(hero.catch_phrase)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addEdit = () => {
        const formData = new FormData()
        formData.append('id', hero.id)
        formData.append('nickname', nickname)
        formData.append('real_name', realName)
        formData.append('origin_description', originDescription)
        formData.append('superpowers', superpowers)
        formData.append('catch_phrase', catchPhrase)
        formData.append('images', file)
        setHeroes(heroes.map(item => item.id === hero.id ? item = hero : item))
        editHero(formData).then(data => onHide())
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Edit Hero</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={nickname}
                        onChange={e => setNickname(e.target.value)}
                        className="mt-3"
                        placeholder="Enter nickname"
                    />
                    <Form.Control
                        value={realName}
                        onChange={e => setRealName(e.target.value)}
                        className="mt-3"
                        placeholder="Enter real name"
                    />
                    <Form.Control
                        value={originDescription}
                        onChange={e => setOriginDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Enter origin description"
                    />
                    <Form.Control
                        value={superpowers}
                        onChange={e => setSuperpowers(e.target.value)}
                        className="mt-3"
                        placeholder="Enter superpowers"
                    />
                    <Form.Control
                        value={catchPhrase}
                        onChange={e => setCatchPhrase(e.target.value)}
                        className="mt-3"
                        placeholder="Enter catch phrase"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <MyButton onClick={onHide}>Close</MyButton>
                <MyButton onClick={addEdit}>Edit</MyButton>
            </Modal.Footer>
        </Modal>
    );
};

export default EditModal;