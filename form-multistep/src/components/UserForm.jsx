import React from "react";

const UserForm = () => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Digite seu nome"
                    required
                />
            </div>
            <div className="form-control">
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite seu email"
                    required
                />
            </div>
        </div>
    )
}

export { UserForm }