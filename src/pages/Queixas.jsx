import React from 'react';
import "./queixas.css";

const Queixas = () => {
    return (
        <div>
        
        <div>

        <h1>Declarar uma Queixas</h1>

            
                  <div class="campo resumo">
                      <label for="mensagem">Motivos Da Queixa</label>
                      <textarea rows="6" id="mensagem" name="mensagem"></textarea>
                  </div>
            
                  <div class="campo">
                      <label>
                          <input type="checkbox" name="newsletter" value="1"/> Gostaria de receber a Newsletter da empresa
                      </label>
                      <input type="file" />
                  </div>
            
                  <button type="submit" name="submit">Enviar</button>
                  <input type="reset" value="Limpar"/>
        </div>

        </div>
    

        
        
    )
}

export default Queixas