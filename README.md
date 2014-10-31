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

<p>Na tag <code>&lt;form&gt;</code>, você deve informar os seguintes atribulos:</p>

<table>
	<tr>
		<th>Atribulos</th>
		<th>Valor</th>
		<th>Descrição</th>
	</tr>
	<tr>
		<td>method <b>[requerido]</b></td>
		<td>POST/GET</td>
		<td>Este é o tipo método utilizado para enviar as informações do formulário</td>
	</tr>
	<tr>
		<td>class</td>
		<td>ajax</td>
		<td>Se quiser enviar o formulário utilizando via AJAX</td>
	</tr>
	<tr>
		<td>data-elsend  <b>[requerido se "ajax"]</b></td>
		<td>&lt;seletor de elemento&gt;</td>
		<td>Utilize o seletor do elemento <code>#id_div .class</code> para informar qual o elemento que irá mostrar quando o formulário estiver sendo enviado via AJAX</td>
	</tr>
</table>