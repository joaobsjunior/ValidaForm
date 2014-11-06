<h1>ValidaForm</h1>
<h3>O melhor script de validação de formulários</h3>

<p>O validaform é um script que foi feito para facilitar a vida do Front-End e Back-End, pois possui suporte à <a href="http://getbootstrap.com/" target="_blank">bootstrap</a>, AJAX, <a href="http://silviomoreto.github.io/bootstrap-select/" target="_blank">Bootstrap Select</a> (Select Personalizado), dentre outras.</p>

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
		<td><code>method</code></td>
		<td>POST/GET</td>
		<td>Este é o tipo método utilizado para enviar as informações do formulário</td>
	</tr>
	<tr>
		<td>opcional</td>
		<td><code>class</code></td>
		<td>ajax</td>
		<td>Se quiser enviar o formulário utilizando via AJAX</td>
	</tr>
	<tr>
		<td><b>[requerido]</b><br>se "ajax"</td>
		<td><code>data-elsend</code></td>
		<td>&lt;seletor de elemento&gt;</td>
		<td>Utilize o seletor do elemento para informar qual o elemento que irá mostrar quando o formulário estiver sendo enviado via AJAX. <br>Exemplo: <code>data-elsend="#id_div"</code></td>
	</tr>
	<tr>
		<td><b>[requerido]</b></td>
		<td><code>data-bootstrap</code></td>
		<td>&lt;boolean&gt;</td>
		<td>Se o formulário for no formato bootstrap setar como "true" senão "false"</td>
	</tr>
	<tr>
		<td><b>[requerido]</b><br>se "ajax"</td>
		<td><code>data-elsuccess</code></td>
		<td>&lt;seletor de elemento&gt;</td>
		<td>Utilize o seletor do elemento para informar qual o elemento que irá mostrar o conteúdo que irá ser retornado da requisição AJAX.<br>Exemplo: <code>data-elsuccess="#id_div"</code></td>
	</tr>
	<tr>
		<td><b>[requerido]</b><br>se "ajax" e data-bootstrap for "false"</td>
		<td><code>data-elvalidate</code></td>
		<td>&lt;seletor de elemento&gt;</td>
		<td>Utilize o seletor do elemento para informar qual o elemento que irá mostrar o conteúdo que irá ser retornado da requisição AJAX.<br>Exemplo: <code>data-elvalidate="#id_div"</code></td>
	</tr>
</table>

<h5>Na tag <code>&lt;input | select | textarea&gt;</code>, você deve informar os seguintes atributos:</h5>

<table>
	<tr>
		<td>Atributo</td>
		<td>Valor</td>
		<td>Descrição</td>
	</tr>
	<tr>
		<td><code>type</code></td>
		<td>&lt;email | text | password | file&gt;</td>
		<td>Tipo do campo</td>
	</tr>
	<tr>
		<td><code>class</code></td>
		<td>&lt;timer (hora) | phone (telefone) | cnpj | cpf | data | cep | so-numero | so-texto | moeda&gt;</td>
		<td>Classes CSS que serão tratadas pelo script, gerando máscaras, retringindo caracteres e validado os dados</td>
	</tr>
	<tr>
		<td><code>required</code></td>
		<td>&lt;atributo html5&gt;</td>
		<td>Setando o campo como obrigatório</td>
	</tr>
	<tr>
		<td><code>data-msgrequired</code></td>
		<td>&lt;string&gt;</td>
		<td>Texto que será apresentado caso o input seja obrigatório e não estiver preenchido</td>
	</tr>
	<tr>
		<td><code>data-msgvalidate</code></td>
		<td>&lt;string&gt;</td>
		<td>Texto que será apresentado caso o input seja preenchido mas não corresponda as prerequisitos do tipo informado</td>
	</tr>
	<tr>
		<td><code>maxlength</code></td>
		<td>&lt;atributo html5&gt;</td>
		<td>Determinando o tamanho máximo do campo.</td>
	</tr>
	<tr>
		<td><code>data-minlength</code></td>
		<td>&lt;inteiro&gt;</td>
		<td>Determinando o mínimo de caracteres do campo.</td>
	</tr>
	<tr>
		<td><code>data-msgequals</code></td>
		<td>&lt;string&gt;</td>
		<td>Texto que será apresentado caso os inputs do tipo <code>email | password</code> com o mesmo <code>name</code> não estejam com valores iguais.</td>
	</tr>
	<tr>
		<td><code>data-cript</code></td>
		<td>&lt;array&gt;</td>
		<td>Relação das criptografias (md5 e sha1) utilizadas para o campo do tipo <code>password</code>. <br>Exemplo: <code>data-cript="md5, sha1, sha1"</code>. Executará assim: <code>sha1(sha1(md5("valor")))</code></td>
	</tr>
	<tr>
		<td><code>data-extencoes</code></td>
		<td>&lt;array&gt;</td>
		<td>Relação das extenções permitidas para o arquivo. <br>Exemplo: <code>data-extencoes=".jpg, .png, .pdf"</code></td>
	</tr>
	<tr>
		<td><code>data-typesize</code> <strong>opcional</strong></td>
		<td>&lt;string&gt;</td>
		<td>Tipo do tamanho do arquivo, podendo ser <code>MB ou KB</code>. Exemplo: <code>data-typesize="MB"</code>. Default: <code>KB</code></td>
	</tr>
	<tr>
		<td><code>data-maxsize</code> <strong>opcional</strong></td>
		<td>&lt;string&gt;</td>
		<td>Tamanho máximo do arquivo carregado. O tamanho é baseado no <code>data-typesize</code></td>
	</tr>
</table>

<em>Para cada input do tipo <code>file</code>, deverá ser criado no formulário um input do tipo text onde mostrará o endereço do arquivo, com o mesmo attributo <code>name</code>, somente acrescido de "txt".</em> <br><strong>Exemplo:</strong><br> <pre>&lt;input type="file" name="arquivo" &gt; <br>&lt;input type="text" name="arquivotxt" &gt;</pre>