import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipes_model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
Recipes: Recipe[] = [
  new Recipe('mustafa','description of recipes','data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAowMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAECAwQGB//EAD0QAAIBAwMCBAQDBgUCBwAAAAECAwAEEQUSIRMxIkFRYQYUMnGBkaEVI7HB4fAkQmLR8TOyFlJTVHKCkv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EACsRAAICAgIBAwIFBQAAAAAAAAABAhEDEiExQQQiUROxMmGB4fBCUnGR0f/aAAwDAQACEQMRAD8A8jIqJFTpYzXo0ZdivFPtqYWnxXag2KwtPtFTAp8UdTtivbS21bilijqDYq20itW4pbaGodinbS2ircU2KGp2xWVpttXYpsUNQ7FJWlsq3FLFDUOxVspbKtxTba7U7Yq2U22rsUxFDU6yrbSq3FKu1OssxSxT04q9ELGxT4p6cU1HWNinxUsVLFGhXIrxT4qwLmnKYptAbFOKWKtK0xFDUKkVYpYFT20ttK0NsQxTbasxS20tBsrxSxVm2ltoBsq20sVbtpitAJVimxVu2m211HFeKVWbaehRw2KcCrhGfSpdP2oqQNSkLUgtXCKpiL2p0xGigLVgStEUBdgqY3ZxVy2x8xVETaJaPbQ3F9DDclxG5IYpjPY4xn3ohcW2jtZTyWxvRLGoK9TZt5YDnHPnQ643WUa3KDxRSKwHrhga16rELWGCKN1K3UytHhgS0YyQfzI/KtMJLVknF2gM6YNQ2UQe3qBhx5VGXZSKZi2UtlbDEBjJFLpe1SZRIybKWytnSPpTGE+lI2MkZNlIpWvo+1Ixe1LY6Rj2U22tnSP4VHpe1Cw0ZdlNs9q1dP2pjH7V1nUZttKtPS9qVdYaDcnw/cxkDpkt5jtinX4euSNxVQPdxz+tbpNRljhEsCIIceFnlLYHoR2Pp50Oub+8UGd5okwyuylivftx+BFYlkn8o0uMfhkJdLmgcJImGIBA/wDMD6Vmt1EqoQv19uR2z3o5JqNg9mRqas4PhVUJHhxz3OfXtQs3kI1CKS1hxH8uu3qZPoQD6+laoSlVsyzq6Q9nEEvx+63hgCuR9X2q3SbKV5bkbCQtwyknPB8hVS3kzbomUuVcZCDOP75rrPh3TIiWuLpmiXO/p4IaU4HC+/JPpVHPXl9CRjtPVICa1pW/SYZl5SRgQBn0PGfyoFbWV1PqNq8ig+NcbdoVR9q7DXdYtZrVLPZtNuwEKrnamOd5I4Jx+f4YoKLxkmMojVo8ldqqRuz5D3HrSxyNqxpwUZUapdKkBI8ORnIJwe2a5TVb+1WaS2cy5jfD7B5j3ozqWs6fqpMjTxMAoVt0E3P32nHr5UJR9N6ZVILeFmbAmXexUewNa4QjLmWRIrrjrv7/APDFEllcnZCbnceF3ds0ZsNM1GVI3Qn5UDG7avAHeotcWUsgEKxozIqFERsK5w3ByfIYzWZby0tZohLDcSgoo54BPO4/V9gO3meKrKfpcVJe78+geyLdXI6WPSQVU9VCWXIGDyPyrY3w44RWaSNd3YE4JrJDqiWliQsl1E3ZFaNGTt2BPP6H71ampXLW69d45NwDrkbtoP8A8eR5eQryMuSvJSOL8jP+yk/9xFy20Yycn7irf2KpbaJoy3HHPn2qKTRDaDfNgkOiea5ODnnjz7+1U/Ecy2F+0fzEUtwCuHjbIP2YH865OUo2mJJxjLVo1/8Ahydt+zxbfqwrcfpWcaG7TNEJIg4PIZsVSl29xKm2NFjUmNdtwisRz5cGtMdzFDcBrmaeMhSQXkDA9vepKcyyjBoobRmxlZEYeRB/pSOhy4UkoAwyDuonZXthPhbWa42qA2EILDk8/b74rS89qIpJVM11txuKTxbR3/1fy71XZ9WDVNXRzn7LkHlSopJLb7z0/mQvltkiIPv9VKuuYvsOIu7meScz9TLLnJM2SfLz7f0pR3sssUcfjdI2LECTgk/hx+tURLNcyb93U6KjxJzgZ4z7/f0rp7Xebu7NoWZ41zEZBuYHaSSfLOccgedLXFjq26MVpC1/FD1IrtcBxuchkXgnvjPcqMYxzRyD4fvOpYv8uYnjjBlL4HOR+dEdE+HjbRw6ld3DGSSMxou3nIbt25ya3X2rx6XbCF5YIZSvhYguwHPcjPBIpMmZRdY+x44bVz6QG1+ZPh5Va0sAxkA23MrEgntt2kDnvz/zWF9f1LU4j8wkTrtIjVCVydyZPqTg4/GhN7enVbhPmUMgRsKckdzn+811kmjJD8O/PJGAgQAbQAPqXcce/H8a0QjqlLJyzPOKm2oHO6hZSRMqMkuxPCxlThPYcVPUt9tax3fy7bHO3anhAJBOMj2FA5ria0VWRWZjwQ2eSRRyS2b9mxQLPiKLLbNq8nHnx2qlua9nfkk4wxqpsAtbaha2vTlS1hRhwzIgf1OD3/zfpQt1EhPj24OCR5/YVsu4rySFGuZoi3+qQBqiNHu5YxMvSWPHB6w7VB45PpFFOK7Zt0pLcrD/AIh3kMgOAg+rBAHftjP5Ctt3bWdvpnzFysZeVVKKWAbIHIA7j7+1Ww28lvDZmWWGaSN0I6PZAOxPAz5+tBdWmlvM72GExtCr+Pl96MlohY+5hOO9klWx6kQnRIf3cQkIKp2xkc5Hf1rWNVjtUeC5tFncdpjOV4OOMgZI47+/nigWYrSKxkgXbuXc27Iy3rnH27cVZHd3ErI6CLCElckliMe/lxSuKmuR3kyJ2g/C0l/MW0mxu5l2KZFO5m9sN6dx25pa3bazczteTafdW4ICyO8bDPG3vRvT9PsbrToJl1S0ikkiIIkDKUYjjBPfk+XpVx0+0bcP2vYx5b6w5YrzwB9+R+FQ+tXtR5E/VN5Nv0OZbQ9TuSJTp7B15x0pCZPQe3HnkVYND1aGBA2kz7kBLnLgNzx9gP6095rFzDdXNlHNaiOGRwGKsofk8hc9z9h3rBbarqHRDQ3JfqcGLLeEZxycfzrfi0fFGu8jimbZbLUYZlE1gshfGVmAY48+fPPPv5VCWNbaZhqGjYjcF1a2kcADPkDnP+1TubnVEi+VlScXfZYyxTaDgDAPOTxQqLUdbguTOVnklXIAdWYDOc8UcsIR8FMc5vygnFCJYkeCNBGVGA8PPvn8aah0+oagsrdTTbYt3yttxz9qes36/wA/2W5/j/YJyWt3pvWt9pJaRFIUgFlPOBg+oIHPlXVaJpkVlbT3E8Mjy3BCrEV8ZOCDxny8J/Gj0cMNpby3t5F8mpDCOIqZHYclR7dx6fzqgapcG4SCHcbojayuvKHjng4/lXn588k+Oj1MOJPjyZHupLW2e7lgafDGDqqAUt8rkIASOedpOMDjFcPPfwSX7zahpMs6soCxq4YKfsT2/rXSfFNrdgSzzXCOTt3Ksilye30jPtXKtHN1N/ytztDDJ6Lf6vb3FbcWKEMab7MmSU5Tavg26e2l/sWO4lhdGWTdmNAWxznPPYHtjy79qWs/FKT2Qt7SSIQmQZUk53AEZxntjFC55rvTbay3zxgQgObYkbcMxPJ8zk8/0oSkZvGlcNDFkFgNxweew4966L6fkEpKPHgeSQOk2GjUFOGCng5+59666FEEBEqsy7TjaOTxxXFPsgMQmRWKOS2W7jPb28/0o5LfTR2kt1BeBGf91HEj4dV7ZyOT9P6itGLJpfyZM8N6YJhe0a6dre2Znz4UCb+/A4J9SPzoxY3PV0sWqQ7F3COaXYP8zYxnjHf8qCpbwTPI8nURiM5Rt3i880VS9tH0+CyglnxHuYDpKC58t2W/hSJviwyrwFbi507/AA8NjGGYSjfIc+JjnxcjHtQK6USQSRx2uWkTJkP1EgZ44/Sp2I23KLsCkTJnAx5N+FNczyJIPlo/lyF5cE+LIHnRbk48jKKi+GabDSp7qyjQ28koVA7YXdtUEZx7cmp6lpz2UbWu6QRwvJFGjnDKfCeR759a6P4DvI4tsUl1JBHHbMpulHCKCM7kOQ3fbjnkihGrva6mfnLB911OxRrVpMyAhQcjzIPl3quJq7lwqFmlGTS5Ng0eYaJYdRszNLC4BzlgXz+gI/OqINHnTqdQkKl2hYn060gJ47/hRaTUdS0/RNNNpO/TNkzgEbgCqsRjI47VdqGv6ssNv07nbvVzwuM4Rj/FfKvJk3ZiXps3KtfJxl693a31xAS8skjdFAXDYD9iPPkdqhpNxdsbm3t7h/3iHw8vwOM8Akeme1T126+U1uS4kupWunOXdOWX19PTHnQUzzm6ku4Jm6m7PUVsP+IrRHJNcpnpQwe1KSD9pq3xBau7FZbmIggrIOGAHOD37A1iTVdUe+U2kNydoYCFyXA45/Ksr6zqqxmOS+mVVA2qXIBHPl2J5NSOuTlQ00ryPhQ+ZT4/79vSmWTJL8bC4Y1+FFIvb5QFNxkgYy1w+f8AupViuZybiQxlShYlcHypUG0Nqz2X4wvI2aMWtrLImzi4nQ5lGfrJPbJzwO+OfbmrTX5bJruB7dPnWUCNwSc55JOTgcY4FdFNep1Y9N6fWjhUOZJvGpOeF57DJPFch8Rll1a6lK3NzI+N3SBb/KPqNLD0+OcLaL5vUTxZFGDJXmu6zPbi7kmg6e3c3hXcRx7HB49TVFxr+pXdtG+n3lzaqCcgvv8AD5DAXy9T+lXfDen3OvxtZW9o6ukZVmkJAwc8/TWZ9K1WyluIVtLSSQNh2mAznHbBPv51teNaeDz1OW3PZhuIrq4cdYxszyEKwibO449+Kvj0M9JV3s9wc+HHhXGe/n/vQ46HrRbndkHIzcDv6960WmhanH8xL861s4TeSkhJk78cH+81l9xZ18l7WscFu9vJDE08cRYyKxDHzBx+YoTbxXTXiSw200qrjftQkYzzzRXT1u7ZmuNTDz/Nw7V/eZcA/f79qy29zdW8UlnpHUQM5LnI3YyB4vIfp3q0uYpojDhyTNVxqQjBNtHLBHI3IIwy/jzV1hJZXRkmmh60ohKjaBncTjd254HpQp7fUYnkDpKZFUFl2g4Ujg5U0V0i8vFspxEU39RSAFYlscjGD7nk1pjNS4kI4qKuP3LdMsC1wrRqxJnQAduee4PatZ069FwI444FVkUKRjnK9jnse/NUWmpTQzKsx2MJU8Izk/Uf9qxxaq9xBI8l5LEoRSqsSvUIBHhIB7c/n96VyigSUnyFNAkl0jUYp5bUyWBMscwVSRIjKB5D1Iozqui3WhmK/wBDmjNjMS8MrRhmHqhyDhh981y08ktvZwXifMNJCzda3lmYpg/S2BjvjI9cV0nwf8TJb289nqjxz2F1/wBVZpCxVj2b1yD6VmySb4vg04mv6i+aW5Hw/aQraRSouns0rvkMudy8c/j29agWcPp/SSJ3IcKsv05KOOcmi10kR0WPox2k8Igm6c1y+2YKVlwcDjHkPcisCKvUsjm3YmGY7Jydh/dvxx5+nvXnLblGl12cvrBnmv7llxDIXbKJ9Ab7eIfwqel2etXavFDsbK535XC8jJ5bH/NG/inSWg1FLqVrbbcsGjEByhJ81znjP2or8Mfs/oXUQ1VYpyhjCMGRxkr/AJS4rQ+IcdnbzT74PPryCxjM8bW7FIiV3jO84Ynvg+X2oLdyWu5TbRlUAxhhn9fP8a9F+INLsrP/AB9vdxuGcdWCEeHbjuQwG77D171wl5pizB57JSo5bpMjZHngE9+KEMrfDJuC7Bu+PJ8Y7/8ApinqUem6hMgkisbt0PZlhYg/jilVOTvaHJPiW9W3cSyl4pSN0W0KGI7Zx6Vp+H7j9pyTySabA6xpl1jdhkk4yck57UI+IvqT7D+dW/CaJI9ysiqy7V4YZHc1bduSRFRWu3k7rSo7yZZZNOsTC8Z2CUSeDdjtuJ74zxXKa5d6gmoTW42ZjOwBSF7Y9Dz386LzEx2QjQlU6ynavA7HyoHqYHXv2xyuCD6GlWWfKbKaR4aMQmv4WLYiWRDu3b/p9+9FNN1i5jS6je2tppZV2s3U7Z8zwaHaiMQREecDZ9+KbSP+ovvCmf8A9GlWSUXwdLFDIqkjW9xfOOvbW1jEu3aWgjyeeM/f3rDpYv57u4hsYpJJHQhwnfbkZ/lVsLtHCzxsUcWxwynBH7yp6PI8esStG7KxCglTgmnhKUmuSeSEYJ0vAZi+ENauJPm7a1uA0q7wY+2Mf7cGro7C+GojSpb0xmQqdhlxL9Pn5Yx79qAS3M/zM568metIM7z2yeKGTyyF2Jdie3etEpOMf8k41J010ej2vwbcvcGFfmZ1WUiERyKfGAf8oz/Ggkvw9096zvGxiKomZRhMZyuABx25oP8ADU0sesWLRyujdePlWIPeuj+MmZbpCpIJUZwe/FTjkX1VCSuzSo7Y5NJKghefDKalHZTWZWOT5UZYkt+7H0kYz2GQcg9h2oTp3wldz3zLNb3ixoHxNMoMRwfYZ5yD9qLPI4+FNPkDsHEEmGB57L51GOaVZ7jEjjBlxhjx+8Qfw4ryPVyniySinwS9Hk+pB79xdFl+LYaLpUc06RXAtpV2BDgja+MHnjNPIIZBZLPI0cQjlDELkgbH8q03sMTWhZo0JTSNykqPCd45HvWGHm/0gHkF+c/ZqbHL2mqS5CV6lmtvM99GgjMP+HmZdvUTuoI5ORj+80OW3+GpIoJHvZF3KrOSwcgnp7v+5z/9aN/Fyq3wNpjMoLCXaCRyBuHH2ridZVYLvT1hURglSQgxnkV7eJ+xX5MmaLv2skgtFZFW4ib99l26uSE5+kY4OPU4rbcX9vGG+au7IRNnG1VyfDlOw/P1GcVyd6Amo6iiDauOw4H1LVJVTpl0xUZDpg47VCaTbVBg5RqmE01GVUAj1azRB2UtKMD04pVyx70qy6y+fsW0x/2n/9k='),
  new Recipe('mustafa','description of recipes','data:image/jpeg;base64,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')

]
  constructor() { }

  ngOnInit(): void {
  }

}
