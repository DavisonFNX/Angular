import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FormMusicasDataSource } from './form-musicas-datasource';

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

  ngOnInit() {
    this.dataSource = new FormMusicasDataSource(this.paginator, this.sort);
  }
}
