import React from 'react';
import "./queixas.css";

const Queixas = () => {
    return (
        <div>
        
        <div>

        <h1>Declarar uma Queixas</h1>
        <fieldset class="grupo">
                      <div class="campo">
                          <label for="nome">Nome</label>
                          <input type="text" id="nome" name="nome" />
                      </div>
                      <div class="campo">
                          <label for="snome">Sobrenome</label>
                          <input type="text" id="nome" name="nome" />
                      </div>
                  </fieldset>
                  <div class="campo">
                      <label>Sexo</label>
                      <label>
                          <input type="radio" name="sexo" value="masculino"/> Masculino
                      </label>
                      <label>
                          <input type="radio" name="sexo" value="feminino"/> Feminino
                      </label>
                  </div>
                  <div class="campo">
                      <label for="email">E-mail</label>
                      <input type="text" id="email" name="email"  value=""/>
                  </div>
                  <div class="campo">
                      <label for="telefone">Nº de associados</label>
                      <input type="text" id="telefone" name="telefone"  value=""/>
                  </div>
            
                  <fieldset class="grupo">
                      <div class="campo">
                          <label for="cidade">Tempo na empresa</label>
                          <input type="text" id="cidade" name="cidade"  value=""/>
                      </div>
                      <div class="campo">
                          <label for="estado">Categoria</label>
                          <select name="estado" id="estado">
                              <option value="">-------------------</option>
                              <option value="PR">socio efetivo</option>
                              <option value="PR">socio não efetivo</option>
                              <option value="PR">socio colaborador</option>
                              <option value="PR">socio benemérito</option>
                              <option value="PR">socio honorário</option>
                          </select>
                      </div>
                  </fieldset>
            
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