package tcc.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "Fornecedor")

public class FornecedorModel implements Serializable{
	private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String razaoSocial;
    private String nomeFantasia;
	private String Cnpj;
    private String Cpf;
    private String inscricaoEstadual;
    private String contribuinteIcms;
    private String longradouro;
    private int numero;
    private String bairro;
    private String cidade;
    private String estado;
    private String cep;
    private String telefone;
    private String email;
    private String situacao;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRazaoSocial() {
		return razaoSocial;
	}
	public void setRazaoSocial(String razaoSocial) {
		this.razaoSocial = razaoSocial;
	}
	public String getNomeFantasia() {
		return nomeFantasia;
	}
	public void setNomeFantasia(String nomeFantasia) {
		this.nomeFantasia = nomeFantasia;
	}
	public String getCnpj() {
		return Cnpj;
	}
	public void setCnpj(String cnpj) {
		Cnpj = cnpj;
	}
	public String getCpf() {
		return Cpf;
	}
	public void setCpf(String cpf) {
		Cpf = cpf;
	}
	public String getInscricaoEstadual() {
		return inscricaoEstadual;
	}
	public void setInscricaoEstadual(String inscricaoEstadual) {
		this.inscricaoEstadual = inscricaoEstadual;
	}
	public String getContribuinteIcms() {
		return contribuinteIcms;
	}
	public void setContribuinteIcms(String contribuinteIcms) {
		this.contribuinteIcms = contribuinteIcms;
	}
	public String getLongradouro() {
		return longradouro;
	}
	public void setLongradouro(String longradouro) {
		this.longradouro = longradouro;
	}
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	public String getBairro() {
		return bairro;
	}
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSituacao() {
		return situacao;
	}
	public void setSituacao(String situacao) {
		this.situacao = situacao;
	}


	
}
