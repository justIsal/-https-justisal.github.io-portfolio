import { Button, Container, Input, InputLabel,Box, FormControl, TextField, TextareaAutosize } from "@mui/material";

import "./Form.scss"
const Form = ()=> {
    return(
        <>
        <Container maxWidth="sm" className="form">
            <FormControl sx={{width: "100%"}}>
                <InputLabel htmlFor="name" >Nama</InputLabel>
                <Input
                    label="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input"
                />

            </FormControl>
            <FormControl sx={{width: "100%",marginTop: "10px"}}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                    label="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="input"
                />
            </FormControl>
            <FormControl sx={{width: "100%",marginTop: "20px"}}>
                <TextareaAutosize
                    aria-label="empty textarea"
                    minRows={4}
                    placeholder="Message..."
                    className="textarea"
                />
            </FormControl>
            <Button className="button">Submit</Button>
        </Container>
        </>
    )
}
export default Form