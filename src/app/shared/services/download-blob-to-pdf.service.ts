import {Injectable} from '@angular/core';
import {SysToasrtService} from '../alert/sys-toasrt.service';


@Injectable({
  providedIn: 'root'
})
export class DownloadBlobToPdfService {

  constructor(private sysToasrtService: SysToasrtService) {
  }

  viewPdf(dat: any, title: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      const data = new Blob([dat], {type: 'application/pdf'});
      if (data.size > 0) {
        const reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = () => {
          const base64data = reader.result.toString();
          const linkElement = document.createElement('a');
          linkElement.setAttribute('href', base64data);
          linkElement.setAttribute('download', title);
          linkElement.click();
        };
      } else {
        this.sysToasrtService.showWarning('NO DATA FOUND', 'No data found for this report');
      }
      resolve(true);
    });
  }


}
