import { Router, ActivatedRoute } from '@angular/router';
import { PostagemService } from './../service/postagem.service';
import { Postagem } from './../model/Postagem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postagem-off',
  templateUrl: './postagem-off.component.html',
  styleUrls: ['./postagem-off.component.css']
})
export class PostagemOffComponent implements OnInit {

  postagem: Postagem = new Postagem()
  idPost: number

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    
    window.scroll(0,0)

    this.idPost = this.route.snapshot.params["id"]
    this.findByIdPostagem(this.idPost)
    

  }

  findByIdPostagem(id : number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=>{
      this.postagem = resp;
      console.log("postagem "+ JSON.stringify(this.postagem))
      console.log("ativo "+this.postagem.ativo)
    })

  }

  

  postagemOff(){
    this.postagem.ativo = false;
    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) =>{
      this.postagem = resp
      this.router.navigate(['/feed'])
      alert("Postagem alterada com sucesso")
    }, err=>{
      if(err.status == '500'){
        alert("Preencha todos os campos corretamente antes de enviar!")
      }
    })

  }
  btnNao(){
    this.router.navigate(['/feed'])
  }

}
