import { ENV } from "../Utils";

export class Auth {
  async register(email, password) {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    try {
      const response = await fetch(url, params);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Registration failed: ${errorData.message}`);
      }

      return await response.json();
    } catch (error) {
      throw new Error(`Failed to register: ${error.message}`);
    }
  }
}

/*
import { ENV } from "../Utils";


export class Auth {
  async register(email, password) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      };
      const response = await fetch(url, params);
      const result = await response.json();
      if (response.status !== 201) {
        throw result;
      }
      return url.json();
    } catch (error) {
      throw error;
    }
  }
}
*/
