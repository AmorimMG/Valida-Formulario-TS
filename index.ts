// src/index.ts

/**
 * Valida se o email é válido
 * @param email - O email a ser validado
 * @returns true se o email for válido, senão false
 */
export function isValidEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
  
  /**
   * Valida se o CPF é válido
   * @param cpf - O CPF a ser validado
   * @returns true se o CPF for válido, senão false
   */
  export function isValidCPF(cpf: string): boolean {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regex.test(cpf);
  }
  
  /**
   * Valida se a senha é segura
   * A senha deve ter pelo menos 8 caracteres, 1 maiúscula, 1 minúscula e 1 número.
   * @param password - A senha a ser validada
   * @returns true se a senha for segura, senão false
   */
  export function isValidPassword(password: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  }
  
  /**
   * Valida se o telefone é válido
   * @param phone - O telefone a ser validado
   * @returns true se o telefone for válido, senão false
   */
  export function isValidPhone(phone: string): boolean {
    const regex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return regex.test(phone);
  }
  
  /**
   * Valida se o CNPJ é válido
   * @param cnpj - O CNPJ a ser validado
   * @returns true se o CNPJ for válido, senão false
   */
  export function isValidCNPJ(cnpj: string): boolean {
    const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    return regex.test(cnpj);
  }
  