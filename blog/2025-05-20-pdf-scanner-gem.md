---
slug: scan-pdf-files-with-pdfscanner-gem
title: Introducing My New Ruby Gem - PDFScanner
authors: shekhar-patil
tags: [ruby, pdf, security, gem]
---


# Introduction

PDF files can contain much more than text and images — they may include JavaScript, embedded files, form inputs, or even malicious payloads. If your application processes user-uploaded PDFs, it's essential to scan them for such potential security threats.

The `pdf_scanner` Ruby gem offers an easy-to-use and customizable way to scan PDF files against configurable security policies. It even supports encrypted PDFs and can quarantine any file that violates your policies.

<!--truncate-->

## Why scan PDFs?

PDFs are a commonly used format for sharing information. However, attackers often exploit advanced PDF features to inject hidden scripts or deliver malware.

By scanning your PDFs before uploading, processing, or distributing them, you significantly reduce the surface area for security breaches.

## Installation

Add the gem to your `Gemfile`:

```ruby
gem 'pdf_scanner'
```

Or install it directly:

```bash
gem install pdf_scanner
```

## How to Use `pdf_scanner`

Here’s a basic example of how to scan a PDF file:

```ruby
require 'pdf_scanner'

scanner = PdfScanner::Scanner.new
result = scanner.scan(
  target_file: 'files/sample.pdf',     # Required
  config_file: 'config/policy.yml',    # Optional
  policy: 'strict',                    # Optional
  dir: 'quarantine',                   # Optional
  passwd: 'secret'                     # Optional for encrypted PDFs
)

puts result
```

### Parameters

| Parameter    | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| target\_file | Path to the PDF file you want to scan (**required**).          |
| config\_file | YAML file with security policies (**optional**).               |
| policy       | Policy name to enforce (**optional**, defaults to `standard`). |
| dir          | Directory to move/quarantine flagged files (**optional**).     |
| passwd       | Password for encrypted PDFs (**optional**).                    |

## What does the scan return?

The `scan` method returns a hash with two keys:

```ruby
{
  rejected_policies: ['EmbeddedFile', 'JavaScript'],
  analysis_failure: []
}
```

* `rejected_policies`: List of policies violated by the scanned PDF.
* `analysis_failure`: Any errors encountered during the scan.

## Configuring Security Policies

Security policies are defined in a YAML configuration file. Here’s an example policy:

```yaml
standard:
  allow:
    - Text
    - Image
  deny:
    - JavaScript
    - EmbeddedFile
    - LaunchAction
    - ExternalStream
```

You can customize these rules to fit the specific needs of your application.

## When should you use `pdf_scanner`?

You can use the gem in many practical scenarios, such as:

* Validating user-uploaded PDFs on web forms
* Automating document checks before emailing or sharing
* As part of a secure document ingestion pipeline
* Complying with data handling and security standards

## Conclusion

The `pdf_scanner` gem is a lightweight yet powerful tool for securing your PDF processing workflows in Ruby. With support for customizable policies and encrypted PDFs, it’s a must-have for any Ruby developer handling file uploads.

You can find the gem on [RubyGems](https://rubygems.org/gems/pdf_scanner) or browse the source code on [GitHub](https://github.com/your-repo-link).
