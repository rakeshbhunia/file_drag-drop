import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // in app.component.ts
onFilesAdded(files: File[]) {
  console.log(files);
 
  files.forEach(file => {
    const reader = new FileReader();
 
    reader.onload = (e: ProgressEvent) => {
      const content = reader.result;
 		// const content = (e.target as FileReader).result;
      // this content string could be used directly as an image source
      // or be uploaded to a webserver via HTTP request.
      console.log(content);
    };
 
    // use this for basic text files like .txt or .csv
    //reader.readAsText(file);
 
    // use this for images
    reader.readAsDataURL(file);
  });
}
 
onFilesRejected(files: File[]) {
  console.log(files);
}
}