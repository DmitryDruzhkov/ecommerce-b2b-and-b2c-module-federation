import { RouterModule } from '@angular/router';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'ecommerce-b2b-and-b2c-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('authContainer', { read: ViewContainerRef }) authContainer!: ViewContainerRef;

  public async loadAuth(): Promise<void> {
    /* const m = await import('mfe1/Component'); */

    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component'
    });

    const ref = this.authContainer.createComponent(m.AppComponent);
  }
}
