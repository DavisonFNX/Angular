import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FormMusicasDataSource } from './form-musicas-datasource';
import { MusicasService } from '../services/musicas.service';
import { Musica } from '../models/musica';

@Component({
  selector: 'app-form-musicas',
  templateUrl: './form-musicas.component.html',
  styleUrls: ['./form-musicas.component.css']
})
export class FormMusicasComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: FormMusicasDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  musicas: Musica[];

  constructor(private service: MusicasService) { }


  ngOnInit() {
    this.dataSource = new FormMusicasDataSource(this.paginator, this.sort);
    this.listaMusicas();
  }

  listaMusicas(): void {
    this.service.getListaMusicas().subscribe(
      (res) => {
        this.musicas = res; 
        console.log("musicas: ", this.musicas)
      },
      (err) => {
        alert('There is a problem!' + JSON.stringify(err)); 
      }
    );
  }

}
