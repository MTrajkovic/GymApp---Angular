import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { Link } from 'src/app/shared/models/link.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  links?: Link[];

  constructor(
    private route: Router,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.getAllLinks();
  }

  logoutUser(): void {
    localStorage.removeItem('User');
    localStorage.removeItem('Role');
    this.route.navigateByUrl('/login');
  }

  private getAllLinks(): void {
    this.navigationService
      .getAll()
      .pipe(take(1))
      .subscribe((links) => (this.links = links));
  }
}
