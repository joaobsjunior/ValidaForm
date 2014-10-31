<h1>ValidaForm</h1>
<h3>O melhor script de validação de formulários</h3>

<p>O validaform é um script que foi feito para facilitar a vida do Front-End e Back-End, pois possui suporte à <a href="http://getbootstrap.com/" target="_blank">bootstrap</a>, AJAX, dentre outras.</p>

<h3>Instalação</h3>
<p>O <code>validaform.js</code> deve ficar no final do <code>&lt;body&gt;</code> e após o <a href="http://jquery.com/" target="_blank">jQuery</a>:</p>

<pre>
	&lt;script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"&gt;&lt;/script&gt;
	&lt;script type="text/javascript" src="js/validaform.js"&gt;&lt;/script&gt;
</pre>

<em>Não é necessário realizar nenhuma chamada para o script funcionar</em>

<h3>Como utilizar</h3>

<h5>Na tag <code>&lt;form&gt;</code>, você deve informar os seguintes atribulos:</h5>

<table>
	<tr>
		<th>Requerido</th>
		<th>Atribulos</th>
		<th>Valor</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td><b>[requerido]</b></td>
		<td>method</td>
		<td>POST/GET</td>
		<td>Este é o tipo método utilizado para enviar as informações do formulário</td>
	</tr>
	<tr>
		<td>opcional</td>
		<td>class</td>
		<td>ajax</td>
		<td>Se quiser enviar o formulário utilizando via AJAX</td>
	</tr>
	<tr>
		<td>opcional</td>
		<td>class</td>
		<td>md5 | sha1 | md5 e sha1</td>
		<td>Se o formulário tiver campos de senha, informar qual criptografia utilizada</td>
	</tr>
	<tr>
		<td><b>[requerido]</b><br>se "ajax"</td>
		<td>data-elsend</td>
		<td>&lt;seletor de elemento&gt;</td>
		<td>Utilize o seletor do elemento <code>"#id_div .class"</code> para informar qual o elemento que irá mostrar quando o formulário estiver sendo enviado via AJAX</td>
	</tr>
	<tr>
		<td><b>[requerido]</b></td>
		<td>data-bootstrap</td>
		<td>&lt;boolean&gt;</td>
		<td>Se o formulário for no formato bootstrap setar como "true" senão "false"</td>
	</tr>
	<tr>
		<td><b>[requerido]</b><br>se "ajax"</td>
		<td>data-elsuccess</td>
		<td>&lt;seletor de elemento&gt;</td>
		<td>Utilize o seletor do elemento <code>"#id_div .class"</code> para informar qual o elemento que irá mostrar o conteúdo que irá ser retornado da requisição AJAX</td>
	</tr>
	<tr>
		<td><b>[requerido]</b><br>se "ajax" e data-bootstrap for "false"</td>
		<td>data-elvalidate</td>
		<td>&lt;seletor de elemento&gt;</td>
		<td>Utilize o seletor do elemento <code>"#id_div .class"</code> para informar qual o elemento que irá mostrar o conteúdo que irá ser retornado da requisição AJAX</td>
	</tr>
</table>

<h5>Na tag <code>&lt;input | select | textarea&gt;</code>, você deve informar os seguintes atribulos:</h5>

<table>
	<tr>
		<td>Atributo</td>
		<td>Valor</td>
		<td>Descrição</td>
	</tr>
	<tr>
		<td>type</td>
		<td>&lt;email | text | password | file&gt;</td>
		<td>Tipo do campo</td>
	</tr>
	<tr>
		<td>class</td>
		<td>&lt;timer (hora) | phone (telefone) | cnpj | cpf | data | cep | so-numero | so-texto&gt;</td>
		<td>Classes CSS que serão tratadas pelo script, gerando máscaras, retringindo caracteres e validado os dados</td>
	</tr>
	<tr>
		<td>required</td>
		<td>&lt;atributo html5&gt;</td>
		<td>Setando o campo como obrigatório</td>
	</tr>
	<tr>
		<td>data-msgrequired</td>
		<td>&lt;string&gt;</td>
		<td>Texto que será apresentado caso o input seja obrigatório e não estiver preenchido</td>
	</tr>
	<tr>
		<td>data-msgvalidate</td>
		<td>&lt;string&gt;</td>
		<td>Texto que será apresentado caso o input seja preenchido mas não corresponda as prerequisitos do tipo informado</td>
	</tr>
	<tr>
		<td>maxlength</td>
		<td>&lt;atributo html5&gt;</td>
		<td>Determinando o tamanho máximo do campo.</td>
	</tr>
	<tr>
		<td>data-minlength</td>
		<td>&lt;inteiro&gt;</td>
		<td>Determinando o mínimo de caracteres do campo.</td>
	</tr>
	<tr>
		<td>data-msgequals</td>
		<td>&lt;string&gt;</td>
		<td>Texto que será apresentado caso os inputs com o mesmo valor do atribulo <code>name</code> não estejam iguais. Muito utilizado para o campos de confirmação de e-mail</td>
	</tr>
	<tr>
		<td>data-extencoes</td>
		<td>&lt;string&gt;</td>
		<td>Relação das extenções permitidas para o arquivo</td>
	</tr>
</table>
