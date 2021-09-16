import {useState} from 'react'

const AddTask = ({onAdd}) => {

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!first_name) {
            alert('Please Fill Data')
            return
        }

        onAdd({first_name, last_name, email})

        setFirstName('')
        setLastName('')
        setEmail('')
    }

    return (
        <>
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>First Name</label>
                <input type="text" placeholder="Add First Name" value={first_name} onChange={(e)=>setFirstName(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Last Name</label>
                <input type="text" placeholder="Add Last Name" value={last_name} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Email</label>
                <input type="text" placeholder="Add Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            
            <input type="submit" value="Save" className="btn btn-block"/>
        </form>
        </>
    )
}
export default AddTask
