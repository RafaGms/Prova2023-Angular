import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Empresa } from './empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent {

  empresa: Empresa[] = [];
  formGroupEmpresa: FormGroup;

  constructor(private empresaService: EmpresaService, private formBuilder: FormBuilder) {

    this.formGroupEmpresa = formBuilder.group({
      id: [''],
      name: [''],
      email:[''],
      atuacao: [''],
      contact: [''],
      funcionario: ['']
    })
  }

  ngOnInit(): void {
    this.loadEmpresa();
  }

  loadEmpresa() {
    this.empresaService.getEmpresa().subscribe({
      next: data => this.empresa = data
    })
  }

  saveEmpresa() {
    this.empresaService.saveEmpresa(this.formGroupEmpresa.value).subscribe({
      next: data => {
        this.empresa.push(data);
        this.formGroupEmpresa.reset();
      }
    })
  }

  removeEmpresa(empresa: Empresa): void {
    this.empresaService.removeEmpresa(empresa).subscribe({
      next: () => {
        this.empresa.splice(this.empresa.indexOf(empresa), 1);
      }
    })
  }
}
