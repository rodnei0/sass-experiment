import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Personalnformation() {
	interface FormData {
		firstName: string;
		lastName: string;
		phoneNumber: string;
	}

	const [formData, setFormData] = useState<FormData>({
		firstName: '',
		lastName: '',
		phoneNumber: '',
	});

	const navigate = useNavigate();

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}
	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		// setMessage(null);

		// if (
		//   !formData?.email ||
		//   !formData?.password ||
		//   !formData?.passwordConfirmation
		// ) {
		//   setMessage({ type: "error", text: "Todos os campos são obrigatórios!" });
		//   return;
		// }

		const { firstName, lastName, phoneNumber } = formData;

		// try {
		//   await api.signUp({ email, password });
		//   setMessage({ type: "success", text: "Cadastro efetuado com sucesso!" });
		//   navigate("/login");
		// } catch (error: Error | AxiosError | any) {
		//   if (error.response) {
		// 	setMessage({
		// 	  type: "error",
		// 	  text: error.response.data,
		// 	});
		// 	return;
		//   }
		//   setMessage({
		// 	type: "error",
		// 	text: "Erro, tente novamente em alguns segundos!",
		//   });
		// }
	}

	return (
		<div className="container">

			<form className="form" onSubmit={handleSubmit}>
				<input
					placeholder="First name..."
					type="text"
					onChange={(e) => handleInputChange(e)}
					name="firstName"
					value={formData.firstName}
					required
				/>
				<input
					placeholder="Last name..."
					type="text"
					onChange={(e) => handleInputChange(e)}
					name="lastName"
					value={formData.lastName}
					required
				/>
				<input
					placeholder="Phone number..."
					type="text"
					onChange={(e) => handleInputChange(e)}
					name="phoneNumber"
					value={formData.phoneNumber}
					required
				/>
				<button type="submit">Next</button>
			</form>
		</div>
	);
}