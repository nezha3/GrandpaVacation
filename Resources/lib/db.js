//open database
var db = Titanium.Database.open('sqliteDB');

// create the schemas table to ensure the next bit of code always works
db.execute('CREATE TABLE IF NOT EXISTS schemas (schemaid INTEGER)');

var maxver = db.execute('SELECT max(schemaid), count(*) FROM schemas');
var current_schema_version = 0;

if (maxver.getRowCount() && maxver.isValidRow()) {
	if(maxver.field(0) == null)
	{
		Ti.API.info('No schema versions have been applied');
		Ti.API.info('Replaying schemas until current');
	}
	else
	{
		Ti.API.info('Existing schema available');
		Ti.API.info("Schema revisions installed: " + maxver.field(1));
		Ti.API.info("Maximum version: " + maxver.field(0));
		current_schema_version = maxver.field(0);
	}
}

maxver.close();

var dir = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, '/lib/sql');
if (dir.exists()) {
    Ti.API.info('sql directory exists!');
}
var files = dir.getDirectoryListing();
if (files == null){
	Ti.API.info('file object is null!');
} else {
	Ti.API.info('file object is !!'+files+'!!');
	Ti.API.info('file object is !!'+Titanium.Filesystem.getResourcesDirectory()+'!!');
}
files.sort(); // sort files into the correct order

Ti.API.info('Available SQL files: ' + files);

for(i = 0; i < files.length; i++)
{
	Ti.API.info('Applying ' + files[i]);
		var f = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'/lib/sql', files[i]);
		var contents = f.read();
		var queries = contents.text.split(';');
		for(j = 0; j < queries.length; j++)
		{
			// only run if the line isn't blank or is longer than one (fix for Android bug)
			if (queries[j] && queries[j].length > 1) {
				Ti.API.info('Query: ' + queries[j]);
				db.execute(queries[j]);
			}
		}
		// update the schemas table automatically
		db.execute('INSERT INTO schemas VALUES(?)', files[i].replace('.sql',''));
}

//close database
db.close();
