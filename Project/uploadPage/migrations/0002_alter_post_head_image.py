# Generated by Django 4.2.1 on 2023-08-09 21:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uploadPage', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='head_image',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
