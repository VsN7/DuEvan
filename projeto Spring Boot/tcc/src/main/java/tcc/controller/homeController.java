package tcc.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import tcc.model.FornecedorModel;

@Controller
public class homeController {
	
	@GetMapping("/")
	public String exibirFormulario(Model model) {
		
		model.addAttribute("fornecedorModel", new FornecedorModel());
		
		return "home";
		
	}
	
}
