import {Component, OnInit} from '@angular/core';
import { AuthorityService } from '../../services/authority.service';
import { RoleService } from '../../services/role.service';


@Component({
    selector: 'role',
    templateUrl: './role.component.html',
    styleUrls: ['./role.component.scss']
    
})
export class RoleComponent implements OnInit {
    authorityRows = [];
    authorityTree = [];

    constructor(
        private authorityService: AuthorityService,
        private roleService: RoleService,
    ) {
    }

    ngOnInit() {
        this.authorityService.getAuthorityList()
        .subscribe(result=>{
            this.authorityRows = result.json();
            this.authorityTree = this.authorityService.makeAuthorityTree(null, this.authorityRows);   
        })
    }
}

