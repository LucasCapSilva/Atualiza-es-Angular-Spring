import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  key = 'data'
  reverse = true


  postagem: Postagem = new Postagem()
  listaPostagens : Postagem[]

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema:number

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    public auth: AuthService
    ) { }

  ngOnInit(){
    window.scroll(0, 0)
    this.findAllPostagens()
    this.findAllTemas()
  }

  findAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) =>{
      this.listaPostagens = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    if(this.postagem.titulo == null || this.postagem.texto == null || this.postagem.tema == null){
      alert("Preencha todos os campos antes e publicar")
    }else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) =>{
        this.postagem = resp
        this.postagem = new Postagem()
        alert("Postado com Sucesso!")
        this.findAllPostagens()
      })
    }
  }

  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }



}
