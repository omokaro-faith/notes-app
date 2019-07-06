# NoteIt

NoteIt is a small server side note-taking application which you can:
- Add notes to
- Read notes from
- List all existing notes from
- Remove notes from.
Information is added from the command line and saved as JSON in the notes.json file.
***
#### Technology
Application was developed using NodeJS
***
#### Installation and Setup
- Navigate to a directory within your terminal
- Clone the project from repository
- Using HTTP; $ git clone [https://github.com/omokaro-faith/notes-app.git](https://github.com/omokaro-faith/notes-app.git)
- Navigate to the root directory e.g $ cd notes-app
- Run `npm install`. This installs the app's dependencies.
***
#### To Add notes; title and body are required fields.
- Run `node app.js add --title='example text' --body='example body'`.

#### To Remove notes; title is a required field
- Run `node app.js remove --title='example text'`.

#### To List notes
- Run `node app.js list`.

#### To Read note; title is a required field.
- Run `node app.js read --title='example text'`.
