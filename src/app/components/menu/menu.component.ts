import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Menu{
  name: string, 
  show: boolean,
  link?: string , 
  icon?: string, 
  childIsShow?: boolean,
  child?: Menu[]
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(
    private router: Router
  ) {}
  menus: Menu[] = [
    {name: '系统首页', link: '/manage', icon: 'fa-home', show: true},
    {
      name: '列表', icon: 'fuxuan', show: true, childIsShow: false, child: [
      {name: '用户列表', link: '/manage/order-list', show: true},
      {name: '新增用户', link: '/manage/order-enter', show: true},
      ]
    },
    {
      name: '设置', icon: 'fuxuan', show: true, childIsShow: false, child: [
      {name: '员工资料设置', link: '/manage/staff-set', show: true}
      ]
    },
    {
      name: 'angular方法列表', icon: 'fuxuan', show: true, childIsShow: false, child: [
      {name: 'ngrx', link: '/manage/ngrx', show: true}
      ]
    },
  ];

  showChildMenu(index) {
    if (this.menus[index].child) {
      this.menus[index].childIsShow = !this.menus[index].childIsShow
    }

    if (this.menus[index].link) {
      //  this.$router.push({path:this.menus[index].link})
      this.router.navigate([this.menus[index].link])
    }
  }

}
