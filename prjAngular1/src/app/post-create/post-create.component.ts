import { Component } from '@angular/core';


@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  inputPost = '';
  newPost="Inisialisasi Variabel";
  //String Interpolation {{}}

  onSavePost(){
    // alert("Hallo Dunia")
    this.newPost = "test";
  }
}