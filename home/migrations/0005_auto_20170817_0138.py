# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-17 01:38
from __future__ import unicode_literals

from django.db import migrations
import wagtail.wagtailcore.blocks
import wagtail.wagtailcore.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_auto_20170817_0111'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interviewquestion',
            name='answers',
            field=wagtail.wagtailcore.fields.StreamField((('answers', wagtail.wagtailcore.blocks.StructBlock((('answer', wagtail.wagtailcore.blocks.CharBlock(max_length=510, required=True)), ('suggestion', wagtail.wagtailcore.blocks.CharBlock(max_length=1120, required=True))))),)),
        ),
    ]
