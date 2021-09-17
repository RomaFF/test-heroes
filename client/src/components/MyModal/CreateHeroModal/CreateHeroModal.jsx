import React, {useState} from 'react';
import {createHero} from "../../../http/heroesAPI";
import {Form, Modal} from "react-bootstrap";
import MyButton from "../../MyButton/MyButton";

const CreateHeroModal = ({heroes, setHeroes, totalCount, setTotalCount, show, onHide}) => {
    const [nickname, setNickname] = useState('')
    const [realName, setRealName] = useState('')
    const [file, setFile] = useState(null)
    const [originDescription, setOriginDescription] = useState('')
    const [superpowers, setSuperpowers] = useState('')
    const [catchPhrase, setCatchPhrase] = useState('')

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addHero = () => {
        const formData = new FormData()
        formData.append('nickname', nickname)
        formData.append('real_name', realName)
        formData.append('origin_description', originDescription)
        formData.append('superpowers', superpowers)
        formData.append('catch_phrase', catchPhrase)
        formData.append('images', file)

        setNickname('')
        setRealName('')
        setFile('')
        setOriginDescription('')
        setSuperpowers('')
        setCatchPhrase('')

        createHero(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Create Hero</Modal.Title>
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
                <MyButton onClick={addHero}>Create</MyButton>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateHeroModal;