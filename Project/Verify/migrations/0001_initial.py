# Generated by Django 4.2.4 on 2023-08-14 21:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='YouTubeData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.URLField()),
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('thumbnail_url', models.URLField(blank=True, max_length=500, null=True)),
                ('judge', models.CharField(max_length=10, null=True)),
                ('percent', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Hashtag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag', models.CharField(max_length=100, null=True)),
                ('youtube_data', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hashtags', to='Verify.youtubedata')),
            ],
        ),
    ]
