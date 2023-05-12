import { useState } from "react";

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('male');
    const [inputField, setInputField] = useState('Write here');
    const [continent, setContinent] = useState({});
    const [role, setRole] = useState('');

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onInputFieldChange = (e) => {
        setInputField(e.target.value)
    }

    const onGenderChange = (e) => {
        setGender(e.target.value);
    }

    const onContinentChange = (e) => {
        setContinent(state => ({...state, [e.target.value]: e.target.checked}));
    }

    const onRoleChange = (e) => {
        setRole(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log(email);
        console.log(password);
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={onEmailChange} placeholder="Your email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={onPasswordChange} placeholder="Your password" />
            </div>

            <div>
                <label htmlFor="inputField">Input field</label>
                <textarea name="inputField" id="inputField" cols="20" rows="10" value={inputField} onChange={onInputFieldChange}></textarea>
            </div>

            <div>
                <label htmlFor="asia">Asia</label>
                <input type="checkbox" name="continent" id="Asia" value="Asia" onChange={onContinentChange} checked={continent.includes('Asia') || false} />
                <label htmlFor="africa">Africa</label>
                <input type="checkbox" name="continent" id="Africa" value="Africa" onChange={onContinentChange} checked={continent.includes('Africa') || false} />
                <label htmlFor="north America">North America</label>
                <input type="checkbox" name="continent" id="North America" value="North America" onChange={onContinentChange} checked={continent.includes('North America') || false} />
                <label htmlFor="south America">South America</label>
                <input type="checkbox" name="continent" id="South America" value="South America" onChange={onContinentChange} checked={continent.includes('South America') || false} />
                <label htmlFor="antarctica">Antarctica</label>
                <input type="checkbox" name="continent" id="Antarctica" value="Antarctica" onChange={onContinentChange} checked={continent.includes('Antarctica') || false} />
                <label htmlFor="europe">Europe</label>
                <input type="checkbox" name="continent" id="Europe" value="Europe" onChange={onContinentChange} checked={continent.includes('Europe') || false} />
                <label htmlFor="australia">Australia</label>
                <input type="checkbox" name="continent" id="Australia" value="Australia" onChange={onContinentChange} checked={continent.includes('Australia') || false} />
            </div>

            <div>
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="male" value="male" onChange={onGenderChange} checked={gender === 'male'} />
                <label htmlFor="female">Female</label>
                <input type="radio" name="gender" id="female" value="female" onChange={onGenderChange} checked={gender === 'female'} />
            </div>

            <div>
                <select value={role} onChange={onRoleChange}>
                    <option value="company">Company</option>
                    <option value="private person">Private person</option>
                </select>
            </div>

            <div>
                <button type="button" onClick={onSubmitHandler}>Register</button>
            </div>
        </form>
    );
}